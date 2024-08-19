export function screen_modules_size_X(numModules, sizeLimiter) {
    var wind_wid = window.innerWidth;

    var width_module = (wind_wid / numModules); // TAMAÑO DE CADA MODULO
    var width_rounded = width_module.toFixed(0); // REDONDEAMOS

    var width = width_rounded > sizeLimiter ? sizeLimiter : width_rounded; // TAMAÑO CON EL LIMITE DE 95px MAX

    return width;
}


export function mediaResponsive() {
    const tabletSize = window.matchMedia("(max-width: 900px) and (min-width: 601px)");
    const mobileSize = window.matchMedia("(max-width: 600px)");
    return [tabletSize, mobileSize]
}