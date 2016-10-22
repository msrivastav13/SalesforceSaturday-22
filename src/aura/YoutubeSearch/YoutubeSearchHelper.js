({
	searchYoutube: function(component,event) {
		var action = component.get("c.search");
			var self = this;
           // set the handler attributes based on event data
            if(typeof event.getParam("searchString") != 'undefined'){
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
			console.log('STATE'+response.getReturnValue());
				if (component.isValid() && state === "SUCCESS") {
					component.set("v.data",response.getReturnValue());
				}else if (state === "ERROR") {
	                var errors = response.getError();
	                if (errors) {
	                    if (errors[0] && errors[0].message) {
	                      console.log(errors[0].message);
	                    }
	                } else {
	                    console.log("Unknown error");
	                }
                }
			});
        action.setStorable();
		$A.enqueueAction(action);
	}
})