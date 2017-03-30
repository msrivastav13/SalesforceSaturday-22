({
	search : function(component, event, helper) {
        //console.log(event.getParams().keyCode);
         if(event.getParams().keyCode == 13){
            let a = event.getParams().keyCode;
             console.log(a);
            var appEvent = $A.get("e.c:searchEvent");
        	appEvent.setParams({
            	"searchString" : component.find("globalsearch").get("v.value") });
			appEvent.fire();
      	}
	}
})