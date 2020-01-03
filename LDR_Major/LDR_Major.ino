int sensorPin = A0; // select the input pin for LDR

int sensorValue = 0; // variable to store the value coming from the sensor
int buzzer=12;
void setup() {
Serial.begin(9600); //sets serial port for communication
  pinMode(buzzer,OUTPUT);
}

void loop() {
  
sensorValue = analogRead(sensorPin); // read the value from the sensor
Serial.println(String(sensorValue)); //prints the values coming from the sensor on the screen
 if(sensorValue<1){
  unsigned char i;
    //output an frequency
    for(i=0;i<200;i++)
    {
      digitalWrite(buzzer,HIGH);
      delay(1);//wait for 1ms
      digitalWrite(buzzer,LOW);
      delay(1);//wait for 1ms
    }
//    output another frequency
    for(i=0;i<100;i++)
    {
      digitalWrite(buzzer,HIGH);
      delay(2);//wait for 2ms
      digitalWrite(buzzer,LOW);
      delay(2);//wait for 2ms
    }
  }

 
delay(500);

}
