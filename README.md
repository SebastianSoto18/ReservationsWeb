# Poryecto de reservas

Un proyecto para la gestión de espacios físicos, el cual permite apartarlos en fechas y horas en especifico 


## instalar localmente

clonar el repositorio

```bash
git clone https://github.com/SebastianSoto18/ReservationsWeb
```

Entrar el directorio del proyecto

```bash
cd reservationweb
```

instalar las dependencias

```bash
npm install
```

iniciar un servidor local

```bash
npm run start
```

## Variables de entorno

Para poner en marcha el proyecto, debes establecer la url del backend en el archivo envairoment.ts la cual debe ser colocada en remplazo de  `API_URL`


## Funcionalidades

- Inicio de session con usuario y contrasena
- Obtener las reservas del usuario
- Eliminar una reserva
- obtener la información básica de un usuario y colocarlar en el nav
- cerrar session

## Demo

el usuario de pruebas es admin1@test.com y cuya contrasena es admin123

## Tech Stack

**Client:** Angular, rxjs, primeNg

**Server:** .Net 8, ASP.NET, C#12, Nunit, Bycript, Swagguer

## Screenshots

**diagrama de base de datos**
![diagrama de base de datos](https://lh3.googleusercontent.com/pw/AP1GczOyInmjf6UJgrzSyeqYB9G5dBueqJ9jwwGZPzreEtX_S-cvmfP9qWtlMybxWGnRTjDludbYLoAqiMHn71xAfBtv2rja23KPRhBusrC2G8zjTRjzAYt9Lh-smG7ZXsMCMnNHktHCBG5csTCov-Vt2WyjUn_wMOI3MaLIuHI0cIoN627ghZ6dGhB5soYpDQIN5mowXeawG3mm7mtJHs0Z83fQ6BaRocguwZbsz33FnhhRJO98aqOiJxWo11LHpJn65hI6BU2xrX_o9oNymrnkXeUKWriYvseh4JyyF3Lo287TjGH7Ytp9llpy9oMzuLmdmt4jijD2NSSQwZc9V79P9n-kNFiOXtfaPb95f9-Mst8cH2JneZfLnzc3UdRKy-C2aiI-AHOWtsqNed77LrBbtLaFMmqu1cjR-Cn-3DhlRNWnAzTlWoSZUg1OtaE2Hx8e2g3yIu2MhUabrCfC1_9aJO-26Pj_K0CY_upEqG-BfBXsajDgYlPhZSy8kq4ol7HiU72d7bgEeyMBTh7_jBISWTfBbPBqYNpWEIZT0OWh0CRGgVXQ0IcVI92KOJggFGlVMvfqr0iW0Bi466-O0CEOngrQbLzc6QXMVHwbZlgNlX4R61SnaeB9r70Bu61UwnlTTRbSfvzGs5TAJNlWdj9osLxq0mMPYGgum4B1j-VwugCnQkrk1G-FxKjDjuiTsKPrMumnIuxg4SAfKKD5pOtvBk2xRDRKP_QdHLj9dT2FILFAflp43bs2kfjCAMl0mp1MoeF1ajRXYOskchR9xby6rsLIvhe1IvZ0mDxsfUfXxu9hZCO4S3wPcYxT5rwyHeHSFR-IOSMm5P-C-9Lys9u1UOkqNVfU2XIKMeHpV4ftozaYTUqe6nHQafXS1QqYpVyPeEH_45wQjb9hWn1F2tmm0nZEWF-q8c-GDrNl_Yh5k1Hu-IX9m1vCD2Ol1i8QKvExi1mBLU-eGahfxSGo5JLTDqpvPaGX6qhu4bQEDqcrdFZFKg-yLs2ArHG7q6QHJNbMQZIUlQuJ9AiG1rG1hqwHmxM=w684-h443-no?authuser=0&quot;)


**relación de dependencia entre las librerías de clase del backend**
![iagrama de relación de dependencia en la estructura del backend](https://lh3.googleusercontent.com/pw/AP1GczOn4qBPmfmnQMam5skWva6o07aA0QzrwhrK6E7liabjc9hXHY5scsrRhOGQBcMaQM6KQMwUAnD2hmpR12iCl1AB0zs8M5FZ0zYGV0jp9wjdD9aJerY7IAcQUUJoe2xgUzB-pqpdeviKE_-o6GcPQCABhkkHVtx1-817l_-kewDD55rkLPCvB3XC4TmZ-V52w8OquCMjLexyCda6LU00tlDyGkyUtYLkjvZWDUJN6oJTxZsqO3nnh-gJ7nfVt3Yr9G4_hPObMEKXCJ74TfoaicWNPAcgxlY7FiCMpQyA23iguAPoB14b6C3pkTb_SfinMRYv80C9Zk5Y-Arz7GVYZOzurXlIHj7Y7iDL9UXtTwGWtriaCL60HBF4Y4SBK2ULbzZFnJGJXW_ZaEAGFbSVwpdP8F0Jl1aXuBspxwZVWUfKxABf24jftO4bTo9xGNnCCuq_sL6NnG2p4UHoPlYCbzoGZSj-4v9UjAnZoFkuoNJtH1CRK10r--gZynW2LeMvFf5lLBiKd6-ijSPEvqLIX5aWylNPKFnqKimAq_aIX4h26mjUKyjMrq2XZVggj10TvxK2EFFjCTCdVhySUeF137FgUBQXYMhiN_BAhPz-9yzaaYPqyrNyBpI5Oa-LGUbyoiA63ITEDC-y-Mz6XzJhzuuz3TOWV8yZGYzD6rZSZm6K3i3oC5pf8DSiTDjTa9OVcncHnhZ9OKCMm2GPKDrIFLYvy-gE-br8Hkd2tlM9pnTIgz58pXiK4lrIIRMFiVVYKdl6sa6qmC8frkSm9qX3m6yrxXUvmwqgf7JBt1qNpiGa0ia9hcz2ZC0ok7J6j23-9UG3TLVgcEkSQJJQbgb0WmlH3H9NNiRahgRbNyQ0nGZUAB5-PaRTm5Wjrr42SaMgaZ_STjreRYme6Z_2wkZYfSM9Ic0JuhjdorS3SBrMlQ0oEo6wdFx3r8Tv35sxZBkglPA56J0_4gff1n-dYQ_HfUx3vezhyX70qeZvPFI6QvFXB3HieCjF_bam9P4ON7g2JWhghdrJxCGeH8q9a8TeeTet=w700-h300-no?authuser=0&quot;)
