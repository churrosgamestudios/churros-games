# Privacy Policy for Lucid Dream Inducer

**Effective Date:** August 2026  
**Applies to:** version 5.0 and later  
**Developer:** Churros Game Studios  
**App:** Lucid Dream Inducer (`com.k560.luciddreaminducer`), covering the phone app and the companion Wear OS watch app  

## 1. Introduction

**Lucid Dream Inducer** is a fully offline app with no user accounts and no servers. We respect your privacy, and because of that our policy is very short: **we do not collect any of your personal data.**

## 2. Data Collection and Storage

The app **and** the Developer will **NOT** collect or store any personally identifiable information on any server, for any period of time.

Personally identifiable information includes a user's real name, location, photos, email address, device identifiers, or usage traits that could otherwise be used to ascertain a user's identity. Neither the app nor the Developer will ever sell, release, redistribute, or otherwise transmit a user's personal data to any third party, for any reason.

All settings (vibration strength and length, induction schedule, Constant Lucidity configuration) and the state of a running session are saved **strictly locally on your device**, in the app's private storage. That preferences file is additionally **excluded from Google cloud backup and from device-to-device transfer**, so it never even leaves the phone it was created on.

The app **does not hold the `INTERNET` permission**. At the Android system level it is therefore technically incapable of transmitting anything anywhere.

## 3. No Ads, No Analytics, No Tracking

The app contains **no advertising**, no analytics SDKs (no Google Analytics, Firebase, Crashlytics, or equivalents) and no tracking libraries of any kind. We do not build user profiles and we do not measure how you use the app.

## 4. Permissions and How the App Works

The app handles in real time only what is inherently required for it to function (timing and delivering series of vibrations) and never records or transmits any of it. The app **does not read health sensors** (heart rate, motion, sleep tracking) or the microphone.

Permissions used and why:

| Permission | Purpose |
| --- | --- |
| `VIBRATE` | delivering the series of vibrations (the app's core function) |
| `WAKE_LOCK` | keeping the CPU available while a session is timed with the screen off |
| `POST_NOTIFICATIONS` | the ongoing-session notification and Constant Lucidity reminders |
| `FOREGROUND_SERVICE`, `FOREGROUND_SERVICE_SPECIAL_USE` | timing a session with the screen off, so the system does not kill it mid-run |
| `RECEIVE_BOOT_COMPLETED` | restoring scheduled reminders after the device restarts |
| `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` | asking you to exempt the app from battery optimisation, without which a session dies after a few minutes |

None of these permissions is used to collect data.

## 5. Distribution Platform (Google Play)

This Privacy Policy applies only to the app itself and does not reflect the policies of the distribution platform where the app is hosted.

Google LLC may process your account and device information to enable core store services. The Developer may use aggregated, anonymised statistics provided by the Google Play Console (such as total download numbers or crash reports) for the purpose of improving the app and fixing bugs. To learn how your platform data is handled, see [Google's Privacy Policy](https://policies.google.com/privacy).

## 6. Direct User Feedback

Information provided directly to the Developer by the user (for example, by email regarding bugs, support requests, complaints, or feedback) may be stored for support and legal reasons, and is handled strictly within the guidelines of applicable law. You may request the deletion of this correspondence at any time.

Apart from that correspondence we hold no data about you, so there is nothing to disclose, correct, or erase on request.

## 7. Children's Privacy

Because the app does not collect any personal information from any user during normal use, we inherently do not knowingly collect or store any personal data from children.

## 8. Uninstalling

Uninstalling the app removes all of its settings and session state from your device. Nothing is left behind, because nothing was ever sent anywhere.

## 9. Changes to This Policy

Should the app ever begin collecting any data, this policy will be updated **before** such a version is released, and the change will be recorded together with a new effective date.

## 10. Contact Us

To request more information about how data is handled, to request deletion of direct correspondence, or for further enquiries about this Privacy Policy, contact us at:

**Email:** churrosgamestudios@gmail.com
