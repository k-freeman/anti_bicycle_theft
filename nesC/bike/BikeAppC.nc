configuration BikeAppC {
}
implementation {
  components MainC;
  components LedsC;
  components BikeC as App;
  components Lea4aGpsC as Gps;
  
  App.Boot -> MainC;
  App.Leds -> LedsC;
  App.GpsControl -> Gps.SplitControl;
  App.GpsMsg -> Gps.GpsMsg;
}
