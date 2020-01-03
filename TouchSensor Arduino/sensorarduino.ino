
String x1,x2,x3,x4;

void setup() {
//pinMode(11, OUTPUT);
pinMode(2, INPUT);
Serial.begin(9600);


}
void loop() {
//Serial.println(x1);
  // put your main code here, to run repeatedly:
  if (digitalRead(2) == HIGH)
  {
    Serial.println("Sensor is touched");
//    analogWrite(11,500);
    delay(100);
//    analogWrite(11,50);
//    delay(100);
    
//  }
//  else{
//    analogWrite(11,0);
  }
  delay(400);
  }
