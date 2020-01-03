import processing.serial.*;

boolean holdbool;
Serial touch,myPort;
int ldrsensor;
String ldrstring,touchstring;
PImage back;
int j=0;
PImage wall,toggle,sufficient,dark;

void setup(){
  size(1400,1000);
  String portname=Serial.list()[4];
  String portnametouch=Serial.list()[3];
  
  //background(5000);
  myPort=new Serial(this,portname,9600);
  touch= new Serial(this,portnametouch,9600);
  wall=loadImage("piss.png");
   toggle=loadImage("tts.png");
  sufficient=loadImage("sufficient.png");
  dark=loadImage("dark.png");
  //back=loadImage("bgrnd.png");
  //f1();
  

}

void draw(){
  
  if(j==0)
  {
    image(wall,0,0,1400,1000);
  }
  
  {
    delay(10);
    touchstring=touch.readStringUntil('\n');
    
    if(touchstring != null)
    {
      j++;
    }
    
    if(j==1)
    {
      image(toggle,0,0,1400,1000);
    }
    
    if(j==2)
    {
      detect();
    }
    
    if(j==3)
    {
    link("file:///Users/parth_mac/Downloads/New%20homework/homepage.html");
    j=0;
    
    }
  } 
}  
//  if ( myPort.available() > 0) 
//  {  
    
    
//    ldrstring = myPort.readStringUntil('\n');
//    if (ldrstring != null && ldrstring!="")
//    {
//      ldrsensor = Integer.parseInt(ldrstring.trim());
//  }
//    else
//    {
//      text("NA",0,180);
//    }
   
//    if(ldrsensor>0)
//    {
      
//      background(100);
//      textSize(70);
//      text(" Sufficient light to proceed",0,110);
//      delay(500);
//  }
  
//  else  
//  {
    
//    background(100);
//    textSize(70);
//    text("Insufficient Light",0,110);
//    delay(500);

//  }
  
//}
//  else
//  {
//    text("",0,180);
//  }
  


void detect(){
    if ( myPort.available() > 0) 
  {  
    
    
    ldrstring = myPort.readStringUntil('\n');
    if (ldrstring.equals(null))
    {
      ldrsensor = Integer.parseInt(ldrstring.trim());
  }
  else if(ldrstring.equals("")){
    text("es" , 0 , 100);
  }
    else
    {
      text("NA",0,180);
    }
   
    if(ldrsensor >= 1)
    {
      
      ////background(100);
      //textSize(70);
      //text(" Sufficient light to proceed",0,110);
      //text(" Touch to go to website",100,200);
            //image(sufficient,0,0,1400,1000);
      delay(5);
  }
  
  else  
  {
    
    //background(100);
    //textSize(70);
    //text("Insufficient Light",0,110);
      //image(dark,0,0,1400,1000);
    delay(5);

  }
  
}
  else
  {
    text("",0,180);
  }
}
  
//void keyPressed()
//{
//  if(key=='s'){
//    link("https://www.linkedin.com");
    
//  }
//}
  
//void keyPressed(){
//  if(key=='s'){
    //if(ldrsensor>2){
  //    background(100);
  //    textSize(70);
  //    text(" Sufficient light to proceed",0,110);
  //}
  //else
  //{
  //  background(100);
  //  textSize(70);
  //  text("Insufficient Light",0,110);
  //}
//}
//}
//void f1(){
//  imageMode(CENTER);
//  //image(back,700,500,1400,1000);
//  background(120);
//  textSize(70);
//  text("Press s to start light detection",0,600);
//}
    
    
