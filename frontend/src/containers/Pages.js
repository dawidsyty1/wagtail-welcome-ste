import React, { Component } from 'react';
import axios from '../axios';
import { connect } from 'react-redux';
import Navbar from '../components/navbar/Navbar'
import Welcome from '../components/welcome/Welcome'
import AboutMe from '../components/about/AboutMe'
import Skills from '../components/skills/Skills'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Spinner from '../components/spinner/Spinner'


class Pages extends Component {

    renderAllPages(pages) {
        if (pages === null) {
            return null;
        }

        let table = pages.map((page) => {
            console.log(page.meta.slug)
            if (page.meta.type === "welcome.WelcomePage") {
                return <Welcome section={page.meta.slug} id={page.id} />
            } else if (page.meta.type === "about_me.AboutPage") {
                return <AboutMe section={page.meta.slug} id={page.id}/>
            } else if (page.meta.type === "skill.SkillPage") {
                return <Skills section={page.meta.slug} id={page.id}/>
            } else if (page.meta.type === "contact.ContactPage") {
                return <Contact section={page.meta.slug} id={page.id}/>
            }
            return ""
        });
        table.push(<Navbar pages={this.props.pages} />)
        table.push(<Footer />)
        return table
    }

    componentWillMount() {
        axios.get('/pages')
            .then(res => res.data)
            .then(pages => this.props.setPages(pages.items, true))
            .catch(error => { console.log(error) });
    };

    getPagesContent() {
        if (this.props.pages !== null) {
            return this.renderAllPages(this.props.pages)
        }
        return <Spinner />;
    };


    render() {
        return (
            <div>
                {this.getPagesContent()}
            </div>
        );
    }
};

const getPagesState = state => {
    return {
        pages: state.pages
    };
};
const setPagesStatus = dispatch => {
    return {
        setPages: (pages) => dispatch({ type: 'SET_PAGES', pages: pages })
    };
};

export default connect(getPagesState, setPagesStatus)(Pages);