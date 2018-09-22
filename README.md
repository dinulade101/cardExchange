# Social Swap

## Vision
A friend and I realized how tedious it is to exchange information with someone new you just met at a social/ networking event, so we decided to make this app where 2 users can simultaneously exchange their social profiles with a tap. 


With this app, you can load several social profiles that you would want to share with anyone you meet, and instantly swap information with just a tap using NFC.


The app has 2 different distinct profiles. One for social events, and a more business-y profile for more professional information.

---
## Implementation
We used Firebase Realtime Database to store users' profiles, with every user getting 2 distinct keys: one for their social profile and one for their business profile. For this, we used [AngularFire2](https://github.com/angular/angularfire2) to set up every user with 2 different, distinct keys, to store their social data.


For data exchange, we used the [NFC library](https://ionicframework.com/docs/native/nfc/) for Ionic .


We used TypeScript and CSS to build the app's layout.

___

## A snapshot of the app
![alt text](https://github.com/ahmedelgohary/cardExchange/blob/master/gallery.jpg "App")



# License
This project is licensed under MIT license. See LICENSE for details.

# Contributors
**Ahmed El Gohary**

**Dinula De Silva**

# References 
[NFC library](https://ionicframework.com/docs/native/nfc/)

[AngularFire2](https://github.com/angular/angularfire2)
