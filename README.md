# BPRJS - Boiler Plate ReactJS

### What is this?
This is just an opinionated ReactJS folder structure, I make this for myself. but, if you wanna try this folder structure, it's okay.

### About Structure Folder
named domain structurer folder, is a structured folder that follows the definition of domain. 

Example URL with root page

![url-rootpage](/images/url-without-page.png)

Assume domain name and domain is a folder domain, and folder domain has several files/folder that is called a page.

![structure-domain](/images/structure-folder-domain.png)

or

```
-> domain
|
'--> About
'---> AboutPage.js
|
'--> User
'---> UserPage.js
|
'--> rootPage.js

```

so, when your url like this, you should create a file/folder in domain folder for your specific page. 

```
https://nazirbahrululum.com/about
```

but, when you have a sub domain like this, you should create a folder named sub and contain a file/folder for your specific page

```
https://admin.nazirbahrululum.com/about
```

![url-subdomain](/images/url-subdomain.png)


### Details
```
components => contains all reusable components or stateless component

domain => has explained above

errors => error page (optional)

routes => routes config

services => consume API folder

store => redux store

utils => all utility (optional)
```

## GET STARTED  
1. clone this repo
2. ```cd bprjs```
3. ```npm install```
4. ```npm start```
