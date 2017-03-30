public with sharing class ApexError{

   /**
     * Call apex controller method throwError
     * @param 
     * @return void
     */

   @AuraEnabled
   public static void throwError(){
      throw new MyException ('User Defined Error!!!!');
   }
   
   /**
     * Call apex controller method callEventServer
     * @param component,event
     * @return void
     */
     
   @AuraEnabled
   public static void throwHandledError(){
      throw new AuraHandledException('User Defined Error'); 
   }
   
   public class MyException extends Exception {}

}