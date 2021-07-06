import {createDeflateRaw} from "zlib";

class homepage{
     activityDashboard;
     menuPull;
     menuIssues;
     menuMarketPlace;
     menuExplore;
     menuViewProfileandMore;
     lblRepositoryCount;
     btnSignOut;
   constructor() {
        this.activityDashboard='#dashboard';
        this.menuPull='a[href="/pulls"]';
        this.menuIssues='a[href="/issues"]';
        this.menuMarketPlace='a[href="/marketplace"]';
        this.menuExplore='a[href="/explore"]';
        this.menuViewProfileandMore='summary[aria-label="View profile and more"]';
      //  this.lblRepositoryCount='nav[arIa-label="User profile"] a:nth-child(2) span';
        this.btnSignOut='.dropdown-signout';
   }
 }

module.exports=new homepage();
