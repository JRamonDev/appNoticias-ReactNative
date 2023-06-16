requireNativeComponent: "RNSScreenStackHeaderConfig" was not found in the UIManager when running android app

La solución esta en la documentación de https://reactnavigation.org/docs/getting-started/

Después de la instalación, @react-navigation/native debe instalar dos dependencias:

npm install react-native-screens 
npm install react-native-safe-area-context

Importante: react-native-screens el paquete requiere un paso de configuración adicional para funcionar correctamente en dispositivos Android . Edite MainActivity.javael archivo que se encuentra en

android/app/src/main/java/<your package name>/MainActivity.java.

Agregue el siguiente código al cuerpo de la clase MainActivity:

@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
  
y asegúrese de agregar una declaración de importación en la parte superior de este archivo:

import android.os.Bundle;
