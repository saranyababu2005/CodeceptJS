const { I } = inject();
const home=require('../pages/Github_homepage');
const repository=require('../pages/Github_repositorypage')
//const home=new homepage();
// Add in your custom step files

Given('I open Github website and click SignIn link', () => {
    I.amOnPage("/");
    I.click('Sign in');
});

When('I enter UserId',()=>{
    I.see('Sign in to GitHub');
    I.fillField('Username or email address','saranyababu2005@gmail.com');
});

When('I enter password',()=>{
    I.fillField('Password','Melur@1234');
});

When('I click Sign In button',()=>{
    I.click('Sign in');
});

Then('I should see Github Home page',()=>{
    I.see('Pull requests');
    I.waitForElement(home.activityDashboard);
});

Then('I should see 4 menus on home page',()=>{
    I.waitForVisible(home.menuPull);
    I.waitForVisible(home.menuIssues);
    I.waitForVisible(home.menuMarketPlace);
    I.waitForVisible(home.menuExplore);
})

Then('I Click on Repositories Menu',()=>{
    I.waitForVisible(home.menuViewProfileandMore);
    I.click(home.menuViewProfileandMore);
    I.see('Your repositories');
    I.click('Your repositories');
})

Then('Display repositories count',async ()=>{
    I.say(await I.grabTextFrom(repository.lblRepositoryCount));
})

Then('Verify "{word}"',(text)=>{
    I.waitForText(text);
     I.see(text);
})
After(()=>{
    I.click(home.menuViewProfileandMore);
    I.see('Sign out');
    I.click(home.btnSignOut);
})

















