# Movie review

## Tech
- React Native
- NodeJS
- MongoDB

## Demo account
|Username| Password |
|--|--|
| demo | demo |
| demo1 | demo |
| demo2 | demo |


## Prerequisites
- Android SDK Platform 27
- Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
- Android SDK Build-Tool 27.0.3
- An physical/virtual android device 7.0 or above

## Installing
### Server (backend)
- update database info at `backend/src/config`
- run `cd backend`
- run `npm run migrate-up`
- run `npm start`

### Android app
- Update `api_url` in `react-native/src/config`
- Prepare an Android device
- Enable USB Debugging
- run `cd react-native`
- run `npm start` (if using Linux)
- run `react-native run-android`
