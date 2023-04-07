# Requirement 
## Input
> To allows users to enter a list of Customers (Full Name, Date of Birth - DOB, Email), Shop (Name, Location) and Product (Name, Price).
> A Customer can buy many Products in many Shops. 
> A Shop has many Products. 
> You need to enter at least 30 Customers, 3 Shops, and 30 Products.
## Output
> The sorting results will be returned to FE to display on the UI (If there are not enough 30 Customers, 3 Shops, and 30 Products, the UI will display an Insufficient Data error message).


# Guide create project
## Install react
> npm install -g create-react-app
## Create Project base
> npx create-react-app my-app --template typescript

# sonar check for .net core
## install tool
> dotnet tool install --global dotnet-sonarscanner
## local run
> dotnet sonarscanner begin /k:"api-netcore" /d:sonar.host.url="http://localhost:9000"  /d:sonar.login="sqp_0a9072f933df2f3cf2e50821211fcecb029911f4"
> dotnet build
> dotnet sonarscanner end /d:sonar.login="sqp_0a9072f933df2f3cf2e50821211fcecb029911f4"
