import PropTypes from 'prop-types';

export default function Hero({ children }) {
    return (
        <section className="bg-[url('./images/mobile-image-hero-1.jpg')] md:bg-[url('./images/desktop-image-hero-1.jpg')] bg-contain bg-no-repeat h-[50vh]">
            {children}
        </section>
    );
}

Hero.propTypes = {
    children: PropTypes.node,
};
