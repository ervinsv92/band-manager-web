import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { AlbumAdminPage } from '../components/AlbumAdminPage';
import { AlbumsAdminPage } from '../components/AlbumsAdminPage';
import { BandAdminPage } from '../components/BandAdminPage';
import { BioPage } from '../components/BioPage';
import { ContactsPage } from '../components/ContactsPage';
import { DiscographyPage } from '../components/DiscographyPage';
import { EventAdminPage } from '../components/EventAdminPage';
import { EventsAdminPage } from '../components/EventsAdminPage';
import { EventsPage } from '../components/EventsPage';
import { HomePage } from '../components/HomePage';
import { MemberAdminPage } from '../components/MemberAdminPage';
import { MembersAdminPage } from '../components/MembersAdminPage';
import { MembersPage } from '../components/MembersPage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const {isLogued} = useSelector(state => state.auth);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/" component={HomePage} isAuthenticated={isLogued} />
                    <PublicRoute exact path="/bio" component={BioPage} isAuthenticated={isLogued} />
                    <PublicRoute exact path="/discography" component={DiscographyPage} isAuthenticated={isLogued} />
                    <PublicRoute exact path="/members" component={MembersPage} isAuthenticated={isLogued} />
                    <PublicRoute exact path="/contact" component={ContactsPage} isAuthenticated={isLogued} />
                    <PublicRoute exact path="/events" component={EventsPage} isAuthenticated={isLogued} />
                    <PrivateRoute exact path="/admin/band" component={BandAdminPage} isAuthenticated={isLogued} />
                    <PrivateRoute exact path="/admin/albums" component={AlbumsAdminPage} isAuthenticated={isLogued} />
                    <PrivateRoute exact path="/admin/album/:id" component={AlbumAdminPage} isAuthenticated={isLogued} />
                    <PrivateRoute exact path="/admin/events" component={EventsAdminPage} isAuthenticated={isLogued} />
                    <PrivateRoute exact path="/admin/event/:id" component={EventAdminPage} isAuthenticated={isLogued} />
                    <PrivateRoute exact path="/admin/members" component={MembersAdminPage} isAuthenticated={isLogued} />
                    <PrivateRoute exact path="/admin/member/:id" component={MemberAdminPage} isAuthenticated={isLogued} />
                    <Redirect to="/" />
                </Switch>
            </div>
      </Router>
    )
}
