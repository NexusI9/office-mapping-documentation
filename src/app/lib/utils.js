
import ROUTES from './route';

export const labelFromPathname = (pathname) => ROUTES.filter( item => !!pathname.match(item.route))[0]?.label || 'null';