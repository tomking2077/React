// change this Component to a class!

class CatNav extends React.Component {

    constructor() {
        super();
    }

    render() {
        console.log(this.props);
        const navLinks = this.props.data.map(function (link, i) {
            return (
                <li key={i} className="cat-link left valign-wrapper">
                    <i className="material-icons">{link.icon}</i>{link.title}
                </li>
            )
        });

        return (
            <div className="row">
                <ul className="cat-nav center-align">
                    {navLinks}
                </ul>
            </div >
        )
    }
}

{/* <div class="row">
<ul class="cat-nav center-align">
    <li class="cat-link left valign-wrapper">
        <i class="material-icons">code</i>Development
    </li> */}