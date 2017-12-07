import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as colors from 'material-ui/styles/colors';
import * as colorManipulator from 'material-ui/utils/colorManipulator';

const muiTheme = getMuiTheme({
    fontFamily : 'Roboto, sans-serif',
    palette: {
        primary1Color: colors.cyan500,
        primary2Color: colors.cyan700,
        primary3Color: colors.grey400,
        accent1Color: colors.pinkA200,
        accent2Color: colors.grey100,
        accent3Color: colors.grey500,
        textColor: colors.darkBlack,
        secondaryTextColor: (colorManipulator.fade)(colors.darkBlack, 0.54),
        alternateTextColor: colors.white,
        canvasColor: colors.white,
        borderColor: colors.grey300,
        disabledColor: (colorManipulator.fade)(colors.darkBlack, 0.3),
        pickerHeaderColor: colors.cyan500,
        clockCircleColor: (colorManipulator.fade)(colors.darkBlack, 0.07),
        shadowColor: colors.fullBlack,
    }
});

export default muiTheme;