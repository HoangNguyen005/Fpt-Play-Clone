import PropTypes from 'prop-types';


import Header from '../../components/Header';
import Footer from '../../components/Footer';
function DefaultLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;