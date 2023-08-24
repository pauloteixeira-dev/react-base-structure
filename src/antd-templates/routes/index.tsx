import React, { Suspense, lazy } from 'react'
import AuthGuard from 'components/AuthGuard'
import GuestGuard from 'components/GuestGuard'
import { Outlet } from 'react-router'
import ProducerGuard from 'components/ProducerGuard'
import { permissions } from 'model/dtos/Menu'
import Layout from '../components/Layout'
import LoadingScreen from '../components/LoadingScreen'

const Loadable = (Component: any) => (props: any) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
)

// Authentication pages
const Authentication = Loadable(lazy(() => import('../pages/Auth/Login')))

// Error pages
const NotFound = Loadable(lazy(() => import('../pages/NotFound')))
const Unauthorized = Loadable(lazy(() => import('../pages/Unauthorized')))

// Dashboard pages
const Home = Loadable(lazy(() => import('../pages/Home')))

// Producer change
const ProducerSelect = Loadable(lazy(() => import('../pages/ProducerSelect')))

// Permission pages
const CreateAccessPermission = Loadable(lazy(
  () => import('../pages/Configuration/AccessPermission/Create')
))
const EditAccessPermission = Loadable(lazy(
  () => import('../pages/Configuration/AccessPermission/Edit')
))
const AccessPermissionList = Loadable(lazy(
  () => import('../pages/Configuration/AccessPermission/List')
))

// User pages
const UserList = Loadable(lazy(
  () => import('pages/Configuration/User/List')
))
const CreateUser = Loadable(lazy(
  () => import('pages/Configuration/User/Create')
))
const EditUser = Loadable(lazy(
  () => import('pages/Configuration/User/Edit')
))

// Work cycle pages
const WorkCycleList = Loadable(lazy(
  () => import('pages/Registration/WorkCycle/List')
))
const CreateWorkCycle = Loadable(lazy(
  () => import('pages/Registration/WorkCycle/Create')
))
const EditWorkCycle = Loadable(lazy(
  () => import('pages/Registration/WorkCycle/Edit')
))

// Geographic region pages
const GeographicRegionList = Loadable(lazy(
  () => import('pages/Registration/GeographicRegion/List')
))
const CreateGeographicRegion = Loadable(lazy(
  () => import('pages/Registration/GeographicRegion/Create')
))
const EditGeographicRegion = Loadable(lazy(
  () => import('pages/Registration/GeographicRegion/Edit')
))

// Actuation unit pages
const ActuationUnitList = Loadable(lazy(
  () => import('pages/Registration/ActuationUnit/List')
))
const CreateActuationUnit = Loadable(lazy(
  () => import('pages/Registration/ActuationUnit/Create')
))
const EditActuationUnit = Loadable(lazy(
  () => import('pages/Registration/ActuationUnit/Edit')
))

// Crop planting pages
const CropPlantingList = Loadable(lazy(
  () => import('pages/Registration/CropPlanting/List')
))
const CreateCropPlanting = Loadable(lazy(
  () => import('pages/Registration/CropPlanting/Create')
))
const EditCropPlanting = Loadable(lazy(
  () => import('pages/Registration/CropPlanting/Edit')
))

// Map types pages
const MapTypeList = Loadable(lazy(
  () => import('pages/Registration/MapType/List')
))
const CreateMapType = Loadable(lazy(
  () => import('pages/Registration/MapType/Create')
))
const EditMapType = Loadable(lazy(
  () => import('pages/Registration/MapType/Edit')
))

// Harvest types pages
const HarvestTypeList = Loadable(lazy(
  () => import('pages/Registration/HarvestType/List')
))
const CreateHarvestType = Loadable(lazy(
  () => import('pages/Registration/HarvestType/Create')
))
const EditHarvestType = Loadable(lazy(
  () => import('pages/Registration/HarvestType/Edit')
))

// Product brands pages
const ProductBrandList = Loadable(lazy(
  () => import('pages/Registration/ProductBrand/List')
))
const CreateProductBrand = Loadable(lazy(
  () => import('pages/Registration/ProductBrand/Create')
))
const EditProductBrand = Loadable(lazy(
  () => import('pages/Registration/ProductBrand/Edit')
))

// Harvest pages
const HarvestList = Loadable(lazy(
  () => import('pages/Registration/Harvest/List')
))
const CreateHarvest = Loadable(lazy(
  () => import('pages/Registration/Harvest/Create')
))
const EditHarvest = Loadable(lazy(
  () => import('pages/Registration/Harvest/Edit')
))
// Types of recommendations
const RecommendationsTypesList = Loadable(lazy(
  () => import('pages/Registration/RecommendationsTypes/List')
))
const CreateRecommendationsTypes = Loadable(lazy(
  () => import('pages/Registration/RecommendationsTypes/Create')
))
const EditRecommendationsTypes = Loadable(lazy(
  () => import('pages/Registration/RecommendationsTypes/Edit')
))
// Producer pages
const ProducerList = Loadable(lazy(
  () => import('pages/Registration/Producer/List')
))
const CreateProducer = Loadable(lazy(
  () => import('pages/Registration/Producer/Create')
))
const EditProducer = Loadable(lazy(
  () => import('pages/Registration/Producer/Edit')
))
// Operation types pages
const OperationTypeList = Loadable(lazy(
  () => import('pages/Registration/OperationTypes/List')
))
const CreateOperationType = Loadable(lazy(
  () => import('pages/Registration/OperationTypes/Create')
))
const EditOperationType = Loadable(lazy(
  () => import('pages/Registration/OperationTypes/Edit')
))

// Layer pages
const LayerList = Loadable(lazy(
  () => import('pages/Registration/Layer/List')
))
const CreateLayer = Loadable(lazy(
  () => import('pages/Registration/Layer/Create')
))
const EditLayer = Loadable(lazy(
  () => import('pages/Registration/Layer/Edit')
))

// Farm pages
const FarmList = Loadable(lazy(
  () => import('pages/Registration/Farm/List')
))
const CreateFarm = Loadable(lazy(
  () => import('pages/Registration/Farm/Create')
))
const EditFarm = Loadable(lazy(
  () => import('pages/Registration/Farm/Edit')
))

// Landifield pages
const CreateLandfield = Loadable(lazy(
  () => import('pages/Registration/Landfield/ImportKml')
))
const LandfieldList = Loadable(lazy(
  () => import('pages/Registration/Landfield/List')
))
const LandfieldEdit = Loadable(lazy(
  () => import('pages/Registration/Landfield/Edit')
))

// Map pages
const MapList = Loadable(lazy(
  () => import('pages/Registration/Map/List')
))
const CreateMap = Loadable(lazy(
  () => import('pages/Registration/Map/Create')
))
const EditMap = Loadable(lazy(
  () => import('pages/Registration/Map/Edit')
))
const CreateElementBond = Loadable(lazy(
  () => import('pages/Registration/Map/ElementBond/Create')
))
const EditElementBond = Loadable(lazy(
  () => import('pages/Registration/Map/ElementBond/Edit')
))
const ViewMap = Loadable(lazy(
  () => import('pages/Registration/Map/ViewMap')
))

// Classification pages
const ClassificationList = Loadable(lazy(
  () => import('pages/Registration/Classification/List')
))
const CreateClassification = Loadable(lazy(
  () => import('pages/Registration/Classification/Create')
))
const EditClassification = Loadable(lazy(
  () => import('pages/Registration/Classification/Edit')
))

// Prescription pages
const Prescription = Loadable(lazy(
  () => import('pages/Recommendation/Prescription')
))

const routes = [
  {
    path: 'authentication',
    children: [
      {
        path: 'login',
        element: (
          <GuestGuard>
            <Authentication />
          </GuestGuard>
        )
      },
      // {
      //   path: 'password-recovery',
      //   element: <PasswordRecovery />
      // },
      // {
      //   path: 'password-reset',
      //   element: <PasswordReset />
      // },
      // {
      //   path: 'register',
      //   element: (
      //     <GuestGuard>
      //       <Register />
      //     </GuestGuard>
      //   )
      // },
    ]
  },
  {
    path: 'producer-select',
    element: (
      <AuthGuard>
        <Layout />
      </AuthGuard>
    ),
    children: [
      {
        path: 'select',
        element: <ProducerSelect />,
      }
    ]
  },
  {
    path: '/',
    element: (
      <AuthGuard>
        <ProducerGuard>
          <Layout />
        </ProducerGuard>
      </AuthGuard>
    ),
    children: [
      {
        path: '/',
        children: [
          {
            path: '/',
            element: <Home />
          },
        ]
      },
      {
        path: 'access-permissions',
        element: (
          <AuthGuard allowedPermissions={[permissions.PERMISSOES_DE_ACESSO]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <AccessPermissionList />
          },
          {
            path: 'new',
            element: <CreateAccessPermission />
          },
          {
            path: 'edit/:permissionId',
            element: <EditAccessPermission />
          }
        ]
      },
      {
        path: 'users',
        element: (
          <AuthGuard allowedPermissions={[permissions.USUARIOS]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <UserList />
          },
          {
            path: 'new',
            element: <CreateUser />
          },
          {
            path: 'edit/:userId',
            element: <EditUser />
          }
        ]
      },
      {
        path: 'work-cycles',
        element: (
          <AuthGuard allowedPermissions={[permissions.CICLOS]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <WorkCycleList />
          },
          {
            path: 'new',
            element: <CreateWorkCycle />
          },
          {
            path: 'edit/:cycleId',
            element: <EditWorkCycle />
          },
        ],
      },
      {
        path: 'geographic-regions',
        element: (
          <AuthGuard allowedPermissions={[permissions.REGIOES]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <GeographicRegionList />
          },
          {
            path: 'new',
            element: <CreateGeographicRegion />
          },
          {
            path: 'edit/:geographicRegionId',
            element: <EditGeographicRegion />
          }
        ]
      },
      {
        path: 'actuation-units',
        element: (
          <AuthGuard allowedPermissions={[permissions.UNIDADES]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <ActuationUnitList />
          },
          {
            path: 'new',
            element: <CreateActuationUnit />
          },
          {
            path: 'edit/:actuationUnitId',
            element: <EditActuationUnit />
          }
        ]
      },
      {
        path: 'crop-plantings',
        element: (
          <AuthGuard allowedPermissions={[permissions.CULTURAS]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <CropPlantingList />
          },
          {
            path: 'new',
            element: <CreateCropPlanting />
          },
          {
            path: 'edit/:cropPlantingId',
            element: <EditCropPlanting />
          }
        ]
      },
      {
        path: 'map-types',
        element: (
          <AuthGuard allowedPermissions={[permissions.TIPOS_DE_MAPA]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <MapTypeList />
          },
          {
            path: 'new',
            element: <CreateMapType />
          },
          {
            path: 'edit/:mapTypeId',
            element: <EditMapType />
          },
        ],
      },
      {
        path: 'harvest-types',
        element: (
          <AuthGuard allowedPermissions={[permissions.TIPOS_DE_SAFRA]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <HarvestTypeList />
          },
          {
            path: 'new',
            element: <CreateHarvestType />
          },
          {
            path: 'edit/:harvestTypeId',
            element: <EditHarvestType />
          },
        ],
      },
      {
        path: 'harvests',
        element: (
          <AuthGuard allowedPermissions={[permissions.SAFRAS]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <HarvestList />
          },
          {
            path: 'new',
            element: <CreateHarvest />
          },
          {
            path: 'edit/:harvestId',
            element: <EditHarvest />
          },
        ],
      },
      {
        path: 'producers',
        element: (
          <AuthGuard allowedPermissions={[permissions.PRODUTORES]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <ProducerList />
          },
          {
            path: 'new',
            element: <CreateProducer />
          },
          {
            path: 'edit/:producerId',
            element: <EditProducer />
          },
        ],
      },
      {
        path: 'product-brands',
        element: (
          <AuthGuard allowedPermissions={[permissions.MARCAS_DE_PRODUTO]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <ProductBrandList />
          },
          {
            path: 'new',
            element: <CreateProductBrand />
          },
          {
            path: 'edit/:productBrandId',
            element: <EditProductBrand />
          },
        ],
      },
      {
        path: 'classifications',
        element: (
          <AuthGuard allowedPermissions={[permissions.CLASSIFICACOES]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <ClassificationList />
          },
          {
            path: 'new',
            element: <CreateClassification />
          },
          {
            path: 'edit/:classificationId',
            element: <EditClassification />
          },
        ]
      },
      {
        path: 'layers',
        element: (
          <AuthGuard allowedPermissions={[permissions.CAMADAS]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <LayerList />
          },
          {
            path: 'new',
            element: <CreateLayer />
          },
          {
            path: 'edit/:layerId',
            element: <EditLayer />
          },
        ],
      },
      {
        path: 'recommendations-types',
        element: (
          <AuthGuard allowedPermissions={[permissions.TIPOS_DE_RECOMENDACAO]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <RecommendationsTypesList />
          },
          {
            path: 'new',
            element: <CreateRecommendationsTypes />
          },
          {
            path: 'edit/:recommendationTypeId',
            element: <EditRecommendationsTypes />
          },
        ],
      },
      {
        path: 'operation-types',
        element: (
          <AuthGuard allowedPermissions={[permissions.TIPOS_DE_OPERACAO]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <OperationTypeList />
          },
          {
            path: 'new',
            element: <CreateOperationType />
          },
          {
            path: 'edit/:operationTypeId',
            element: <EditOperationType />
          },
        ],
      },
      {
        path: 'farms',
        element: (
          <AuthGuard allowedPermissions={[permissions.FAZENDAS]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <FarmList />
          },
          {
            path: 'new',
            element: <CreateFarm />
          },
          {
            path: 'edit/:farmId',
            element: <EditFarm />
          },
        ],
      },
      {
        path: 'landfields',
        element: (
          <AuthGuard allowedPermissions={[permissions.FAZENDAS]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: 'farm/:farmId',
            element: <LandfieldList />
          },
          {
            path: 'new/farm/:farmId',
            element: <CreateLandfield />
          },
          {
            path: 'edit/:landfieldId',
            element: <LandfieldEdit />
          },
        ],
      },
      {
        path: 'maps',
        element: (
          <AuthGuard allowedPermissions={[permissions.MAPAS]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <MapList />
          },
          {
            path: 'new',
            element: <CreateMap />
          },
          {
            path: 'edit/:mapId',
            element: <EditMap />
          },
          {
            path: 'edit/:mapId/bindElement/new',
            element: <CreateElementBond />
          },
          {
            path: 'edit/:mapId/bindElement/edit/:elementMapId',
            element: <EditElementBond />
          },
          {
            path: 'edit/:mapId/bindElement/edit/:elementMapId/view-map',
            element: <ViewMap />
          },
        ],
      },
      {
        path: 'prescription',
        element: (
          <AuthGuard allowedPermissions={[permissions.PRESCRICAO]}>
            <Outlet />
          </AuthGuard>
        ),
        children: [
          {
            path: '',
            element: <Prescription />
          },
        ],
      },
      {
        path: 'unauthorized',
        element: <Unauthorized />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]

export default routes
