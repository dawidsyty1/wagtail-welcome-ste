import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown'



class Navbar extends Component {

    constructor(props) {
        super(props);
        this.myInput = React.createRef();
    }

    defaultStyle = "navbar navbar-expand-lg ftco_navbar ftco-navbar-light site-navbar-target";
    state = {
        backgroundColor: "white",
        isTop: false,
        isNavbarMenu: false,
        additionalClassStyle: this.defaultStyle,
        stylePosition:"none",
        visibilityStatus:'hidden'
        
    };

    showNormalNavbar(force) {
        const isTop = window.scrollY < 200;
        if ((isTop !== this.state.isTop && isTop === true) || (force && isTop)) {
            this.setState({ additionalClassStyle: this.defaultStyle });
            this.setState({ stylePosition:"fixed"});
            this.setState({ isTop: true });
        } else if((this.state.isTop === true && isTop === false) || (force)){
            var newState = this.defaultStyle + " awake scrolled "
            this.setState({ stylePosition:"none"});
            this.setState({ additionalClassStyle: newState });
            this.setState({ isTop: false });
        }
    };

    showMenuNavbar(force){
        if((this.myInput.current.offsetWidth === 0 && this.state.isNavbarMenu === false)
            || (force && this.myInput.current.offsetWidth === 0)) {
            this.setState({ visibilityStatus: "visible"});
            this.setState({ isNavbarMenu: true });            
        } else if((this.myInput.current.offsetWidth !== 0 && this.state.isNavbarMenu === true)
            || (force && this.myInput.current.offsetWidth !== 0)){
            this.setState({ visibilityStatus: "hidden"});
            this.setState({ isNavbarMenu: false });
        }
    };

    updateNavbar(force) {
        this.showNormalNavbar(force);
        this.showMenuNavbar(force);
    };


    componentDidMount() {
        this.updateNavbar(true);
        document.addEventListener('scroll', () => {
            this.updateNavbar(false);
        });
    }

    createNavDropdownItems (pages) {
        if (pages === null) {
            return null;
        }
        let table  = pages.map((page) => {
            return <NavDropdown.Item href={"#" + page.slug}>{page.draft_title}</NavDropdown.Item>            
            
        });
        return table;
    };

    createNavBarItems (pages) {
        if (pages === null) {
            return null;
        }
        let table  = pages.map((page) => {
            return <li class="nav-item"><a href={"#" + page.slug} class="nav-link"><span>{page.draft_title}</span></a></li>
        });
        return table;
    };

    render() {
        return (
            <nav class={this.state.additionalClassStyle} style={{position: this.state.stylePosition}}
            id="ftco-navbar">
    
            <div class="container">
                <a class="navbar-brand" href="/">D.S.</a>
    
                <NavDropdown class="navbar-toggler" title="Menu" id="basic-nav-dropdown" style={{visibility: this.state.visibilityStatus}}>
                    {this.createNavDropdownItems(this.props.pages)}
                </NavDropdown>
    
                
                <div class="collapse navbar-collapse" id="ftco-nav" ref={this.myInput}>
                <ul class="navbar-nav nav ml-auto">
                    {this.createNavBarItems(this.props.pages)}
                </ul>
                </div>
            </div>
            </nav>
        );
    }
}
export default Navbar;