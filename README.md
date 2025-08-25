# Roskilde tekniske skole infotavle 
Simpel info tavle der viser:
- Velkomst 
- Pauser
- Kort over området
- Klasselokaler samt lærere for GF1, GF2 og hovedforløbet
- Vejret 7 dage frem
- Tiden

Lavet af WU13

Hele projektet er bygget i React og bliver hostet lokalt på en raspberry pi 5 (apache server).
SSH er slået til, kræver bare man kender brugernavn og IP addressen på den respektive raspberry pi.

## Ændring af projekt/filer
Der er flere forskellige måder at gøre det på.
Det kører på en lokal apache server, den viser en index.html fil som kan findes i /var/www/html/

### Manuelt
Kopier github repoet, lav dine ændringer og git push 
Man kan manuelt tage SD kortet ud, gå ind i mappen, slette de eksisterende filer og erstatte dem med de nye build filer

### SCP eller rsync
Kræver ikke man har fysisk adgang til serveren, men kræver man er på samme netværk, har IP adressen og kender brugernavnet.
Læs raspberry pi docs for en mere detaljeret beskrivelse.
https://www.raspberrypi.com/documentation/computers/remote-access.html#raspberry-pi-connect
