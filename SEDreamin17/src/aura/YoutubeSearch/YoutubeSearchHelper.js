({
	searchYoutube: function(component,event) {
		var action = component.get("c.search");
			var self = this;
           // set the handler attributes based on event data
            if(typeof event.getParam("searchString") != 'undefined'){
                //console.log(event.getDef());
                var searchStr = event.getParam("searchString");
                component.set("v.SearchString", searchStr);
            }   
			var searchkey = component.get("v.SearchString");
            console.log(searchkey);
        	action.setParams({
	        		"searchstr": searchkey
	    	});
			action.setCallback(this, function(response) {
			var state = response.getState();
            debugger;
			console.log('STATE'+response.getReturnValue());
                debugger;
				if (component.isValid() && state === "SUCCESS") {
					component.set("v.data",response.getReturnValue());
                    debugger;
				}else if (state === "ERROR") {
	                var errors = response.getError();
	                if (errors) {
                        alert('Error');
	                    if (errors[0] && errors[0].message) {
	                      console.log(errors[0].message);
	                    }
	                } else {
                        alert('Error');
	                    console.log("Unknown error");
	                }
                }
			});
        action.setStorable();
		$A.enqueueAction(action);
	}
})