/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Main content module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojselectcombobox', 'ojs/ojchart'],
  function(oj, ko) {
   /**
    * The view model for the main content view template
    */
    function mainContentViewModel() {
        var self = this;
        //self.something = ko.observable("This section uses content from it's own 'home' ViewModel. The module is found in the /js/viewModules folder");
        self.val = ko.observableArray(["bar"]);

         /* toggle button variables */
        self.stackValue = ko.observable('off');
        self.orientationValue = ko.observable('vertical');
        
        /* chart data */
        var barSeries = [{name: "Series 1", items: [74, 42, 70, 46]},
                         {name: "Series 2", items: [50, 58, 46, 54]},
                         {name: "Series 3", items: [34, 22, 30, 32]},
                         {name: "Series 4", items: [22, 46]}];
    
        var barGroups = ["Group A", "Group B", "Group C", "Group D"];
   
        self.barSeriesValue = ko.observableArray(barSeries);
        self.barGroupsValue = ko.observableArray(barGroups);
       
    }
   return new mainContentViewModel();
});
