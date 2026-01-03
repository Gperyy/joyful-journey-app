# App Store'da Test Etme Kılavuzu

## Yapılan Değişiklikler

✅ **Düzeltilen Sorunlar:**
1. iOS platformu projeye eklendi
2. App ID formatı düzeltildi: `app.lovable.80d85a9b3df84298b5a6a0ed0d9349da` → `com.shgairshow.app`
3. `capacitor.config.json`'dan server URL konfigürasyonu kaldırıldı (App Store için gerekli)
4. Uygulama production için build edildi
5. Capacitor dosyaları iOS ile senkronize edildi

## Xcode'da Yapmanız Gerekenler

### 1. Xcode Projesini Açın

```bash
open ios/App/App.xcworkspace
```

**ÖNEMLİ:** `.xcworkspace` dosyasını açın, `.xcodeproj` dosyasını DEĞİL!

### 2. Signing & Capabilities Ayarları

1. Xcode'da sol panelden projeyi seçin (mavi App ikonu)
2. **TARGETS** altından **App**'i seçin
3. **Signing & Capabilities** sekmesine gidin
4. Aşağıdaki ayarları yapın:

   - ✅ **Automatically manage signing** kutucuğunu işaretleyin
   - **Team:** Apple Developer hesabınızı seçin
   - **Bundle Identifier:** `com.shgairshow.app` (otomatik gelecek)

### 3. Bundle Identifier'ı Kontrol Edin

Eğer `com.shgairshow.app` bundle identifier'ı Apple Developer Console'da kayıtlı değilse:

**Seçenek A:** Xcode otomatik oluşturacak (Automatically manage signing açıksa)

**Seçenek B:** Manuel oluşturmak isterseniz:
1. https://developer.apple.com/account/ adresine gidin
2. **Certificates, Identifiers & Profiles** bölümüne gidin
3. **Identifiers** > **+** butonuna tıklayın
4. **App IDs** seçin ve bundle identifier olarak `com.shgairshow.app` girin

### 4. Version ve Build Number

1. **TARGETS** > **App** > **General** sekmesinde:
   - **Version:** 1.0.0 (istediğiniz versiyonu girebilirsiniz)
   - **Build:** 1 (her upload'da artırın)

### 5. TestFlight için Archive Oluşturma

1. Menüden **Product** > **Archive** seçin
2. Xcode projeyi derleyecek ve archive oluşturacak
3. Archive tamamlandığında **Organizer** penceresi açılacak
4. **Distribute App** butonuna tıklayın
5. **App Store Connect** seçin
6. **Upload** seçin
7. Varsayılan ayarları kabul edin ve **Upload** yapın

### 6. TestFlight'da Test

1. https://appstoreconnect.apple.com/ adresine gidin
2. Uygulamanızı seçin
3. **TestFlight** sekmesine gidin
4. Yüklenen build'i göreceksiniz
5. **Internal Testing** veya **External Testing** grubuna ekleyin
6. Test kullanıcıları TestFlight uygulamasından uygulamanızı indirebilir

## Sık Karşılaşılan Sorunlar

### "No matching provisioning profiles found"
- **Çözüm:** Xcode'da Team seçili olduğundan emin olun ve "Automatically manage signing" açık olsun

### "Bundle identifier is already in use"
- **Çözüm:** `capacitor.config.json` dosyasında `appId`'yi değiştirin (örn: `com.shgairshow.airshow`)
- Değişiklik sonrası `npm run build && npx cap sync ios` komutunu çalıştırın

### Archive butonu aktif değil
- **Çözüm:** Device olarak "Any iOS Device (arm64)" seçili olmalı, simulator değil

### Upload sonrası hata
- **Çözüm:** App Store Connect'te uygulama kaydının olduğundan emin olun
- Bundle ID'nin orada tanımlı olduğunu kontrol edin

## Geliştirme Moduna Geri Dönme

Lokal geliştirme için tekrar server URL'sini kullanmak isterseniz:

```json
// capacitor.config.json
{
  "appId": "com.shgairshow.app",
  "appName": "SHG Airshow",
  "webDir": "dist",
  "server": {
    "url": "https://80d85a9b-3df8-4298-b5a6-a0ed0d9349da.lovableproject.com?forceHideBadge=true",
    "cleartext": true
  }
}
```

Sonra `npx cap sync ios` çalıştırın.

## İletişim

Sorun yaşarsanız:
- Xcode'un log mesajlarını kontrol edin
- Archive Organizer'daki hata mesajlarını okuyun
- App Store Connect'teki build durumunu kontrol edin
