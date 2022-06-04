import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import { Route } from './src/routes/Routes';
import AnnotationProviders from './src/contexts/annotationContexts';
import theme from './src/components/global/theme';

export default function App() {
  return (

    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AnnotationProviders>
          <Route />
        </AnnotationProviders>
      </ThemeProvider>

    </NavigationContainer>
  );
}