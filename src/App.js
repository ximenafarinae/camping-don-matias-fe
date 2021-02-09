import React, { lazy, Suspense } from 'react';
import Nav from './Components/layout/Nav';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loading from './Components/Spinner'
const TenantForm = lazy(() => import('./Components/Pages/Tenant/TenantForm'))
const FamilyMember = lazy(() => import('./Components/Pages/Tenant/FamilyMember'))
const MedicalInfo = lazy(() => import('./Components/Pages/Tenant/MedicalInfo'))
const TenantDetail = lazy(() => import('./Components/Pages/Tenant/TenantDetail'))
const List = lazy(() => import('./Components/Pages/Tenant/TenantList'))
const EditFamilyMember = lazy(() => import('./Components/Pages/Tenant/EditFamilyMember'))
const EditTenant = lazy(() => import('./Components/Pages/Tenant/EditTenant'))
const EditMedicalInfo = lazy(() => import('./Components/Pages/Tenant/EditMedicalInfo'))
const Search = lazy(() => import('./Components/Search/Search'))
const Diseases = lazy(() => import('./Components/Diseases'))
const SearchResults = lazy(() => import('./Components/Search/SearchResults'))

function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
        <Suspense fallback={<Loading></Loading>}>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/tenant-list'></Redirect>
            </Route>
            <Route path="/tenant" exact component={TenantForm} />
            <Route path="/medical-info/:id" component={MedicalInfo} />
            <Route path="/family-member/:id" component={FamilyMember} />
            <Route path='/tenant-list' component={List} />
            <Route path='/tenant-detail/:id' component={TenantDetail} />
            <Route path='/edit-family-member/:id' component={EditFamilyMember} />
            <Route path="/edit-tenant/:id" component={EditTenant}></Route>
            <Route path="/diseases/:id" component={Diseases}></Route>
            <Route path="/edit-medical-info/:id" component={EditMedicalInfo}></Route>
            <Route path='/search' exact component={Search} />
            <Route path='/search/:name' component={SearchResults} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
