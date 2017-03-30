({
	displayerror : function(component, event) {
        var self = this;
		var action = component.get("c.throwHandledError");
        action.setCallback(this, function(res){
            //console.log('hello');
            var resState = res.getState();
            if (component.isValid() && resState === "SUCCESS") {
                var response = res.getReturnValue();
            } else if (component.isValid() && resState === "ERROR") {
                console.log(res.getError()[0].message);
            }
        });
        $A.enqueueAction(action);
	}
})