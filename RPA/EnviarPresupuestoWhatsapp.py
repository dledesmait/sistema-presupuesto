import subprocess
import pygetwindow as gw
import time

# Ruta de la carpeta que quieres abrir
ruta_carpeta = r'C:\Users\damil\Desktop\PresupuestosPDF'

# Comando para abrir la carpeta en el explorador de archivos
comando = f'explorer "{ruta_carpeta}"'

# Ejecutar el comando para abrir la carpeta en el explorador de archivos
subprocess.Popen(comando, shell=True)

# Esperar un tiempo para que la ventana se abra completamente (ajusta el tiempo según sea necesario)
time.sleep(2)

# Encontrar la ventana del Explorador de archivos por su título
ventana = gw.getWindowsWithTitle('PresupuestosPDF')[0]  # Cambia 'Carpeta' por el título correcto de la ventana

# Obtener el ancho de la pantalla y establecer el ancho deseado para la ventana (50% del ancho de la pantalla)
ancho_pantalla = ventana.width
ancho_deseado = ancho_pantalla // 2  # Tamaño deseado (50%)

# Ajustar el tamaño de la ventana al 50% del ancho de la pantalla
ventana.resizeTo(ancho_deseado, ventana.height)

# Mover la ventana al lado izquierdo de la pantalla
ventana.moveTo(0, 0)



# URL de WhatsApp Web
url_whatsapp = "https://web.whatsapp.com/"

# Comando para abrir la URL en Google Chrome
subprocess.Popen(['start', 'chrome', '--new-window', url_whatsapp], shell=True)

# Esperar un tiempo para que la ventana del navegador se abra completamente (ajusta el tiempo según sea necesario)
time.sleep(2)