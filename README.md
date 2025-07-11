# Menjadi Google Cloud Engineer

## Courses

Dalam courses ini memiliki tugas dimana harus membuat program aplikasi back-end dengan javasrcip dan menguji dalam postman. Saya mengembangaknnya dan menghostingnya dalam GCE (Google Compute Engine) yang memiliki static IPAddress.

Courses Dicoding :
[Dicoding Academy](https://www.dicoding.com/academies/342/corridor)

BookshelfAPITestCollectionAndEnvironment
Dalam folder "BookshelfAPITestCollectionAndEnvironment" Memiliki file Postman untuk menguji projek back-end yang dibuat
berikut BookshelfAPITestCollectionAndEnvironment : C:\persiapan intern\two\notes-app-back-end\BookshelfAPITestCollectionAndEnvironment

[Bookshelf API Test Collection and Environment](./BookshelfAPITestCollectionAndEnvironment)

## Donlowad respository

```bash
git clone https://github.com/periartaa/notes-app-back-end.git
```

## Konfigurasi Sederhana Untuk Localhost

1. Donlowad respository
2. install depedensi
   ```bash
   npm install
   ```
3. running
   ```bash
   npm run start-dev
   ```
4. Uji dengan Postman

## Secara garis besar proses konfigurasi

1. Membuat dan menjalankan Compute Engine Instance
2. Mengonfigurasi Kebutuhan pada Compute Engine Instance
3. Memasang Node.js dan Menjalankan Web Server di Compute Engine Instance
4. Process Manager
5. Statik IP
6. nginx

## Pengujian postman

1. Masuk ke SSH
   ```bash
   cd notes-app-back-end/
   ```
2. Lalu jalankan untuk menghidukan server

   ```bash
   notes-app-back-end$ pm2 start npm --name "notes-api" -- run "start-prod"
   ```

   Kita bisa juga menghentikan prosesnya dengan cara:

   ```bash
   pm2 stop notes-api
   ```

   Untuk menjalankan kembali proses, gunakan perintah:

   ```bash
   pm2 start notes-api
   ```

   Di pm2, kita dapat me-restart proses secara manual dengan cara:

   ```bash
   pm2 restart notes-api
   ```

3. Masuk ke postman. Sesuai IPAddress

## Modul Konfigurasi

Lebih jelas bisa dilihat melalui modul konfigurasi [Modul Konfigurasi](./Konfigurasi_Modul)
