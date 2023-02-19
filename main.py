import tensorflow as tf
import numpy as np 
import matplotlib.pyplot as plt 

def grados():
 celsius = np.array([-40, -10, 0, 8, 15, 22, 38], dtype=float)
 fahrenheit = np.array([-40, 14, 32, 46, 59, 72, 100], dtype=float)

 capa1 = tf.keras.layers.Dense(units=1, input_shape=[1])
 modelo = tf.keras.Sequential([capa1])

 modelo.compile(
    optimizer=tf.keras.optimizers.Adam(0.1),
    loss='mean_squared_error'
 )

 print("Estamos comenzando a entrenar la Red Neuronal espera...")
 historial = modelo.fit(celsius, fahrenheit, epochs=1000, verbose=False)
 print("El modelo se ha entrenado con exito.")


 plt.xlabel('# Epoca')
 plt.ylabel('# magnitud de perdida')
 plt.plot(historial.history["loss"])

 print("Empezemos hacer predicciones")
 resultado = modelo.predict([100.0])
 print("El resultado es: ", str(resultado) + " fahrenheit")

 print("variables internas del modelo")
 print(capa1.get_weights())
valor =  grados()


