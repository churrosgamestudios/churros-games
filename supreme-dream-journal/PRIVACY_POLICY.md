# Privacy Policy for Supreme Dream Journal

**Effective date:** August 2026  
**Applies to versions:** 5.0 and later  
**Developer:** Churros Game Studios  
**Application:** Supreme Dream Journal (`com.k560.supremedreamjournal`), covering the phone version and the companion Wear OS watch app  

## 1. Introduction

**Supreme Dream Journal** is a dream journal that runs entirely on your device, with no user accounts and no servers. We respect your privacy, and for that reason this policy is very short: **we do not collect any of your personal data.**

A dream journal is an unusually personal record, so below we describe not only what we do not do, but also **exactly where your dreams live and when they can leave your phone**, even when that happens because of the operating system rather than this app.

## 2. Data collection and storage

Neither the application **nor** the developer collects **or** stores any personally identifiable information on any server, for any period of time. The developer **never sees the contents of your dreams**: there is nowhere for them to be sent.

Everything you enter (title, description, date, tags, rating, colour) goes into a database in the app's **private storage on your device**. The same place holds your settings (theme, reminder time) and, if you enable the lock, a **salted hash of your PIN** (never the PIN itself).

The application **does not hold the `INTERNET` permission**. At the Android system level this makes it technically incapable of sending anything anywhere. This is not a promise; it is a property you can verify in the APK file.

## 3. When data can leave your device

There are exactly three such situations, and **each one is started by you or by your operating system**, never by the app on its own initiative.

**A backup you make yourself.** In Settings you can export the whole journal to a JSON file. You choose where it is saved through the system file picker. The app has no access to anything except the file you point it at, and it sends nothing anywhere. What happens to that file afterwards is entirely up to you.

**Android's own backup.** The app lets Android include its data in the standard system backup (*Android Auto Backup*), which means the journal may be copied **to your own Google account** and restored onto a new device. This is deliberate: journals kept for years cannot be reconstructed, and a lost phone should not mean eight lost years of writing. That backup is encrypted with your device credential, and **you can turn it off** under *Settings → Google → Backup*. The developer has no access to it.

**Transfer from the watch to the phone.** A dream captured on the watch travels to your phone within your own device pairing, through the *Wearable Data Layer* of Google Play Services (usually over Bluetooth). Only the entry text, the tags you picked and a timestamp are transferred. In the other direction, only a list of your most-used tags travels, so the watch has something to suggest. The transport belongs to Google Play Services and is governed by [Google's privacy policy](https://policies.google.com/privacy); the app itself, on the phone and on the watch alike, **holds no `INTERNET` permission**.

## 4. No ads, no analytics, no tracking

The app contains **no advertising**, no analytics SDKs (no Google Analytics, Firebase, Crashlytics or equivalents) and no tracking libraries of any kind. We do not build user profiles and we do not measure how you use the app. There are no in-app purchases.

The `churrosgamestudios.com` link in the navigation drawer opens your **system browser**. That is handing an address to the operating system, not a network connection made by the app, which is precisely why it needs no `INTERNET` permission.

## 5. Permissions and how the app works

The app **does not read health sensors** (heart rate, movement, sleep), **does not use the microphone** and **has no access to your location, contacts or photos**. Dictation on the watch is handled by the **Wear OS system input screen**. That screen, not this app, reaches for the microphone, and only for as long as you are dictating.

Permissions used and why:

| Permission | Purpose |
| --- | --- |
| `POST_NOTIFICATIONS` | the evening reminder to write your dream down, and the notice that an entry has arrived from the watch |
| `RECEIVE_BOOT_COMPLETED` | restoring the scheduled reminder after the device restarts |
| `USE_BIOMETRIC`, `USE_FINGERPRINT` | unlocking the journal with your fingerprint, if you enable the lock |
| `WAKE_LOCK`, `FOREGROUND_SERVICE`, `ACCESS_NETWORK_STATE` | required by the `androidx.work` library used by the home-screen widget. `ACCESS_NETWORK_STATE` only allows **reading** whether the device has a connection, not opening one. Without the `INTERNET` permission the app cannot open any connection anyway |

None of these permissions is used to collect data.

## 6. Distribution platform (Google Play)

This policy covers the application itself and does not extend to the rules of the distribution platform hosting it.

Google LLC may process information about your account and device in order to operate the store's core services. The developer may use aggregated, anonymised statistics provided through the Google Play Console (for example total download counts and crash reports) to improve the app and fix bugs. Data processing on the platform side is described in [Google's privacy policy](https://policies.google.com/privacy).

## 7. Contacting the developer directly

Information you send to the developer directly (for example by e-mail about a bug, support request, complaint or suggestion) may be retained for technical support and legal purposes, as applicable law permits. You may ask for such correspondence to be deleted at any time.

Beyond that correspondence we hold no data about you, so there is nothing to disclose, correct or erase on request.

## 8. Children's privacy

Because the app collects no personal data from any user during normal use, it does not knowingly collect or store any personal data from children.

## 9. Uninstalling

Uninstalling removes the journal, the settings and the lock from your device. The only things that remain are the ones you placed somewhere yourself: an exported JSON file, and the Android backup on your Google account if it was enabled. You can delete both yourself.

**Export your journal before you uninstall.** We hold no copy of it and will not be able to restore it.

## 10. Changes to this policy

If the app ever begins collecting any data, this policy will be updated **before** such a version is released, and the change will be recorded together with a new effective date.

## 11. Contact

For further information about data processing, deletion of correspondence, or questions about this policy, write to:

**E-mail:** churrosgamestudios@gmail.com
