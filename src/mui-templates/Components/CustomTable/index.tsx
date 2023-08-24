import React, {
  useEffect,
  useState,
  forwardRef,
  ForwardedRef,
  useRef,
} from "react";
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRenderCellParams,
  GridRowsProp,
} from "@mui/x-data-grid";

export interface ICustomTableRenderCellParams extends GridRenderCellParams {
  refreshData: () => void;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
}

export interface IGetDataParams {
  page: number;
  pageSize: number;
}

export interface IGetDataResponse {
  Pagination: PaginationInfo;
  Items: any[];
}

interface ICustomTableProps {
  getData: (searchParams: IGetDataParams) => Promise<IGetDataResponse>;
  columns: GridColDef[];
}

interface ICustomTableRef {
  refreshData: () => void;
}

const CustomTable = forwardRef<ICustomTableRef, ICustomTableProps>(
  (props, ref: ForwardedRef<ICustomTableRef>) => {
    const { getData, columns } = props;
    const internalRef = useRef<ICustomTableRef>({ refreshData: () => {} });

    if (ref) {
      if (typeof ref === "function") {
        ref(internalRef.current);
      } else {
        ref.current = internalRef.current;
      }
    }

    const defaultPagination: PaginationInfo = {
      currentPage: 0,
      pageSize: 10,
      totalPages: 0,
      totalItems: 0,
    };

    const [pagination, setPagination] =
      useState<PaginationInfo>(defaultPagination);
    const [data, setData] = useState<GridRowsProp<any>[]>(
      [] as GridRowsProp<any>[]
    );

    const paginationModel: GridPaginationModel = {
      page: pagination.currentPage,
      pageSize: pagination.pageSize,
    };
    const rowCount = pagination.totalItems;

    const searchData = (searchParams: IGetDataParams) => {
      getData &&
        getData(searchParams).then((response) => {
          setData(response.Items || []);
          setPagination(response.Pagination);
        });
    };

    const refreshData = () => {
      searchData({
        page: pagination.currentPage,
        pageSize: pagination.pageSize,
      });
    };

    internalRef.current.refreshData = refreshData;

    const handlePaginationChange = (model: GridPaginationModel) => {
      searchData(model);
    };

    useEffect(() => {
      searchData({
        page: defaultPagination.currentPage,
        pageSize: defaultPagination.pageSize,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updatedColumns = [...columns];

    updatedColumns.forEach((column) => {
      const columnAsAny = column as any;
      columnAsAny.refreshData = () => {
        searchData({
          page: defaultPagination.currentPage,
          pageSize: defaultPagination.pageSize,
        });
      };
    });

    return (
      <DataGrid
        columns={updatedColumns}
        rows={data}
        rowCount={rowCount}
        paginationMode="server"
        pageSizeOptions={[10, 20]}
        paginationModel={paginationModel}
        onPaginationModelChange={(model) => {
          handlePaginationChange(model);
        }}
        autoHeight
        sx={{
          backgroundColor: "white",
        }}
        rowSelection={false}
      />
    );
  }
);

export default CustomTable;
