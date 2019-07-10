(function () {
    'use strict';

    angular
        .module('CompassApp')
        .controller('UPPFlightResultsController', UPPFlightResultsController);

    function UPPFlightResultsController($scope, $uibModal) {
        // Variables
        $scope.showUpgrades = false;
        $scope.showFlightDetails = false;
        $scope.uppPriceColumn = true;
        $scope.uppFareColumn = true;
        $scope.showFlight2Details = false;
        $scope.showAwardCalendar = false;
        $scope.showFiltersSection = false;
        $scope.showCorporateDirect = true;
        var corpDirectButton = document.getElementById('corporateDirectIcon');
        var corpDirectButtonUpgrades = document.querySelectorAll(".upgrade");
        var cdUpgrades = [corpDirectButtonUpgrades[3], corpDirectButtonUpgrades[4], corpDirectButtonUpgrades[5], corpDirectButtonUpgrades[9], corpDirectButtonUpgrades[10], corpDirectButtonUpgrades[11], corpDirectButtonUpgrades[15], corpDirectButtonUpgrades[16], corpDirectButtonUpgrades[17], corpDirectButtonUpgrades[21], corpDirectButtonUpgrades[22], corpDirectButtonUpgrades[23], corpDirectButtonUpgrades[27], corpDirectButtonUpgrades[28], corpDirectButtonUpgrades[29], corpDirectButtonUpgrades[33], corpDirectButtonUpgrades[34], corpDirectButtonUpgrades[35], corpDirectButtonUpgrades[39], corpDirectButtonUpgrades[40], corpDirectButtonUpgrades[41], corpDirectButtonUpgrades[45], corpDirectButtonUpgrades[46], corpDirectButtonUpgrades[47], corpDirectButtonUpgrades[51], corpDirectButtonUpgrades[52], corpDirectButtonUpgrades[53], corpDirectButtonUpgrades[57], corpDirectButtonUpgrades[58], corpDirectButtonUpgrades[59]];
        var z = 0;
        $scope.unitedFlights = document.querySelectorAll(".flight");
        $scope.unitedFares = document.querySelectorAll(".column-label");
        $scope.unitedFlightsNumber = $scope.unitedFlights.length;
        
        console.log($scope.unitedFlights.length);
        var i;
        var x;
        

        for(x=0; x < $scope.unitedFares.length;  x++){
            $scope.unitedFares[x].classList.add('fake-column-label');
            $scope.skeletonFares =  document.querySelectorAll(".fake-column-label");

                $scope.skeletonFares.forEach(function(index) {

                    setTimeout(function() {
                        for(x=0; x < $scope.skeletonFares.length;  x++){

                        $scope.skeletonFares[x].classList.remove('fake-column-label');
                        };
                        
                    
                
                }, 2000);
            });
        }

        for(i=0; i < $scope.unitedFlights.length;  i++){




            
          
            
            
            
            
            
            $scope.unitedFlights[i].classList.add('fake-flight');

            $scope.skeletonFlights = document.querySelectorAll(".fake-flight");

            $scope.unitedFlights[1].classList.add('ng-hide');
            $scope.unitedFlights[2].classList.add('ng-hide');
            $scope.unitedFlights[4].classList.add('ng-hide');
            $scope.unitedFlights[5].classList.add('ng-hide');
            $scope.unitedFlights[6].classList.add('ng-hide');
            $scope.skeletonFlightsNumber = $scope.skeletonFlights.length;

            
            

            
            // unitedFlights[i].style.backgroundColor = "red";

            $scope.skeletonFlights.forEach(function(index) {

                setTimeout(function() {

                    $scope.skeletonFlights[0].classList.remove('fake-flight');
                    $scope.skeletonFlights[1].classList.remove('fake-flight');
                    $scope.skeletonFlights[2].classList.remove('fake-flight');
                    $scope.unitedFlights[1].classList.remove('ng-hide');
                    $scope.unitedFlights[2].classList.remove('ng-hide');
                    
                    
                   
            
            }, 2000);
            

            setTimeout(function() {

                

            $scope.skeletonFlights =
            document.querySelectorAll(".fake-flight");
            $scope.skeletonFlights[0].parentNode.removeChild($scope.skeletonFlights[0]);

            
            
            
            for(z=0;
            z < $scope.skeletonFlights.length;
            z++){

                
            
            $scope.skeletonFlights[z].classList.remove('fake-flight');
            $scope.unitedFlights[4].classList.remove('ng-hide');
            $scope.unitedFlights[5].classList.remove('ng-hide');
            $scope.unitedFlights[6].classList.remove('ng-hide');
           
            
            }
            
            
            }, 8000);

            
            });
            
            // setTimeout(function() {
            
            // var skeletonFlights =
            // document.querySelectorAll(".fake-flight");

            
            
            // for(z=0;
            // z < skeletonFlights.length;
            // z++){

                
            
            // skeletonFlights[2].classList.remove('fake-flight');
            
            // }
            
            
            // }, 2000);
            
            
            } 
        var flatBedClicks = 0;
        var durationClicks = 0;
        var showCoporateDirectClicks = 1;
        $scope.flatBedFlights = function(){

            flatBedClicks+= 1;
            var flights = document.querySelectorAll(".flight[data-flatbed='false']");
            if(flatBedClicks % 2 !== 0){
                flights[0].style.display = "none";
                flights[1].style.display = "none";
                flights[2].style.display = "none";
            }
            else{
                flights[0].style.display = "block";
                flights[1].style.display = "block";
                flights[2].style.display = "block";
            }
        }

        $scope.durationSort = function(){
            var flights = document.querySelectorAll(".flight");
            console.log(flights);
            durationClicks+= 1;

            if(durationClicks % 2 !== 0){
                document.getElementById('flight1').style.order = "4";
                document.getElementById('flight2').style.order = "3";
                document.getElementById('flight3').style.order = "2";
                document.getElementById('flight4').style.order = "1";
            }

            else{
                document.getElementById('flight1').style.order = "1";
                document.getElementById('flight2').style.order = "2";
                document.getElementById('flight3').style.order = "3";
                document.getElementById('flight4').style.order = "4";
            }
        }

        $scope.durationSortReturn = function(){
            var flights = document.querySelectorAll(".flight");
            console.log(flights);
            durationClicks+= 1;

            if(durationClicks % 2 !== 0){
                document.getElementById('flight1R').style.order = "4";
                document.getElementById('flight2R').style.order = "3";
                document.getElementById('flight3R').style.order = "2";
                document.getElementById('flight4R').style.order = "1";

            }

            else{
                document.getElementById('flight1R').style.order = "1";
                document.getElementById('flight2R').style.order = "2";
                document.getElementById('flight3R').style.order = "3";
                document.getElementById('flight4R').style.order = "4";
            }
        }

        
        
        
            
        // corpDirectButton.addEventListener("mousedown", function(){
        //     console.log(cdUpgrades);
        //     showCoporateDirectClicks = showCoporateDirectClicks + 1;
        //     $scope.showCorporateDirect = false;
        //     if(showCoporateDirectClicks % 2 == 0){
        //         for (z = 0; i < cdUpgrades.length; z++) {
        //             cdUpgrades[z].style.display = "none";
        //         }
        //     }
        //
        //     else{
        //         $scope.showCorporateDirect = true;
        //         for (z = 0; i < cdUpgrades.length; z++) {
        //             cdUpgrades[z].style.display = "block";
        //         }
        //     }
        // });
              
        // Mixed Upgrade Popover    
        $scope.mixedUpgradePopover = {
            templateUrl: 'popover-mixed-upgrade.html',
        };

        // Mixed Cabin Popover    
        $scope.mixedCabinPopover = {
            templateUrl: 'popover-mixed-cabin.html',
        };

        // Insufficient Upgrade Instrument Popover    
        $scope.insufficientUpgradeInstrument = {
            templateUrl: 'popover-insufficient-upgrade-instrument.html'
        };

        $scope.LofPopopver = {
            templateUrl: 'popover-line-of-flight.html'
        };

        $scope.transferSummaryPopover = {
            templateUrl: 'popover-summary-flight-transfer.html'
        };

        $scope.openMarketDisplay = function() {
            var marketDisplayModal = $uibModal.open({
                templateUrl: 'app/layouts/flights-display/flights-display.html',
                controller: 'FlightsDisplayController',
                size:'lg'
            });            
        };

        $scope.cogSummaryTooltip = {
            templateUrl: 'popover-summary-flight-cog.html'
        };

        $scope.animationsEnabled = true;

        $scope.open = function () {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: './app/layouts/upp-flight-results/modal.html',
                scope: $scope,
                size: ''
            })
        };

        $scope.confirmEconomy = function () {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: './app/layouts/upp-flight-results/confirmEconomy.html',
                scope: $scope,
                size: ''
            })
        };

        $scope.confirmPremium = function () {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: './app/layouts/upp-flight-results/confirmPremium.html',
                scope: $scope,
                size: ''
            })
        };

        $scope.duBusiness = function () {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: './app/layouts/upp-flight-results/duBusiness.html',
                scope: $scope,
                size: 'lg'
            })
        };

        $scope.duBusinessConfirm = function () {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: './app/layouts/upp-flight-results/du-bus-waitlist-confirm.html',
                scope: $scope,
                size: 'lg'
            })
        };

        $scope.confirmFirst = function () {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: './app/layouts/upp-flight-results/confirmFirst.html',
                scope: $scope,
                size: ''
            })
        };

        $scope.waitlistEconomy = function () {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: './app/layouts/upp-flight-results/waitlistEconomy.html',
                scope: $scope,
                size: ''
            })
        };

        $scope.waitlistPremium = function () {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: './app/layouts/upp-flight-results/waitlistPremium.html',
                scope: $scope,
                size: 'lg'
            })
        };

        $scope.waitlistBusiness = function () {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: './app/layouts/upp-flight-results/waitlistBusiness.html',
                scope: $scope,
                size: ''
            })
        };

        $scope.waitlistFirst = function () {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: './app/layouts/upp-flight-results/waitlistFirst.html',
                scope: $scope,
                size: ''
            })
        };

        $scope.duPEWaitlist = function () {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: './app/layouts/upp-flight-results/du-pe-waitlist.html',
                scope: $scope,
                size: 'lg'
            })
        };

        $scope.duBusWaitlist = function () {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: './app/layouts/upp-flight-results/du-bus-waitlist.html',
                scope: $scope,
                size: 'lg'
            })
        };

        $scope.shoppingFiltersPopover = {
            templateUrl: 'popover-shopping-filters.html',
        };

        $scope.resetSearch = function() {
            $scope.showUpgrades = false;
            $scope.showFlightDetails = false;
            $scope.showAwardCalendar = false;
            $scope.showFiltersSection = false;
        };

        

        // $scope.showUpgradesFilter = function (){
            
        // }
        $scope.cnt = 0;
        $scope.showUpgradesFilter = function(){
            $scope.cnt=$scope.cnt+1;
            
            if($scope.cnt % 2 == 0) {
                $scope.showUpgrades = false;
            }


            else if($scope.cnt % 2 != 0) {
                $timeout(function() {
                    document.getElementById('upgrade-filter').click();
                }, 0);
            }
        }

        $scope.openUpgradesFilter = function (){
            $scope.cnt = 1;
            $scope.showUpgrades = true;
        }


        $scope.messages = {
            titles: [
                'Upgrade Confirmed',
                'Traveler Waitlisted',
                'Double Upgrade',
                'Double Waitlist',
                'You have chosen to be added to the United Premium Economy upgrade waitlist.',
                'You have chosen to be added to the United Business upgrade waitlist. You may also opt in to be added to the Premium Economy upgrade waitlist.',
                'You have chosen to be added to teh United Business upgrade waitlist. You may also opt in to be added to the Premium Economy Upgrade waitlist.'

            ],
            content: [
                'The traveler has a confirmed upgrade from Basic Economy to Economy class.',
                'The traveler has a confirmed upgrade from Economy to Premium Economy class.',
                'The traveler has a confirmed upgrade from Premium Economy to Business class.',
                'The traveler has a confirmed upgrade from Premium Economy to First class.',
                'The traveler has been waitlisted for an upgrade from Basic Economy to Economy class.',
                'The traveler has been waitlisted for an upgrade from Economy to Premium Economy.',
                'The traveler has been waitlisted for an upgrade from Premium Economy to Business class.',
                'The traveler has been waitlisted for an upgrade from Premium Economy to First class.',
                'The traveler has been confirmed for an upgrade from Economy Flexible to Business class.'
            ]
        };

        $scope.instrumentPopoverGPU = {
            content: '',
            templateUrl: './app/layouts/upp-flight-results/instrumentPopoverGPU.html',
            title: ''
        };

        $scope.instrumentPopoverMUA = {
            content: '',
            templateUrl: './app/layouts/upp-flight-results/instrumentPopoverMUA.html',
            title: ''
        };
        $scope.instrumentPopoverGPUConfirmed = {
            content: '',
            templateUrl: './app/layouts/upp-flight-results/instrumentPopoverGPUConfirmed.html',
            title: ''
        };

        $scope.instrumentPopoverMUAConfirmed = {
            content: '',
            templateUrl: '/app/layouts/upp-flight-results/instrumentPopoverMUAConfirmed.html',
            title: ''
        };
        
        // Hide filters / Calendar
        
        $scope.showFilters = function() {
            $scope.showAwardCalendar = false;
            $scope.showFiltersSection = !$scope.showFiltersSection;
        };

        $scope.showCalendar = function() {
            $scope.showFiltersSection = false;
            $scope.showAwardCalendar = !$scope.showAwardCalendar;
        };

        // Filters Model
        $scope.filtersModel = {
            showAvailableFareClasses: true
        };
    }
})();