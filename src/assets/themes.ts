const common = {
    white: '#fff',
    transparent: 'transparent',
    black: '#000',
    blue: 'blue',
    placeHolderGray: 'rgba(216, 216, 216, 0.6)',
    green: 'green',
    grey: 'grey',
};

const Light = {
    COLORS: {
        ...common,
        primary: '#4287f5',
        secondary: '#E9ECEF',
        textPrimary: '#000000',
        textSecondary: '#607d8b',
        backgroundModalUpdate: '#323232',
        backdropModalUpdate: '#00000071',
        progressUpdateColor: '#28A696',
        white: '#FFFFFF',
        backRoundSignIn: '#FFB900',
        colorBottomLogIn: '#353A50',
        ColorBackRoundImage: '#101110',
        backgroundColorHeader: '#23253C',
        backgroundColorLogIn: '#141829',
        titleColor: '#0000ff',
        textInput: '#78849E',
        black: '#202020',
        borderInputError: '#ff0000',
    },
    FONTS: {
        defaultFont: 'Montserrat-Regular',
        boldFont: 'Montserrat-SemiBold',
        thinFont: 'Montserrat-Light',
    },
};

const Dark = {
    colors: {
        ...common,
        primary: '#607d8b',
        secondary: '#607d8b',
        textPrimary: '#607d8b',
        textSecondary: '#607d8b',
    },
    fonts: {
        defaultFont: 'Montserrat-Regular',
        boldFont: 'Montserrat-SemiBold',
        thinFont: 'Montserrat-Light',
    },
};

export const Themes = Light;

export const ThemesDark = Dark;
