NEATWerx
========

A demonstration of the NEAT stack (Node, Express, Angular, Tedious/T-SQL)

I coined the term "NEAT stack" as a variation of the "MEAN stack".

In this configuration you use T-SQL / SQL Server (via the Tedious driver) instead of MongoDB.

You might substitute SQL Server for the database for any of the following reasons:

  1. MongoDB is not well-suited to store your data
  2. You cannot convert from SQL Server to MongoDB in the scope of your project
  3. You need a transactional database and SQL Server fits the bill for you
  
Benjamin Coe has an excellent article on MongoDB in CODE Oct 2013 - http://www.codemag.com/Article/1309051

The “T” in the term “NEAT stack” is borrowed from “T-SQL” and the “Tedious” driver for SQL 
Server under NodeJS. Tedious represents a spoken form of the acronym T.D.S. (Microsoft’s 
Tabular Data Stream Protocol http://msdn.microsoft.com/en-us/library/dd304523.aspx). There are a number of “tedious” node packages but I have settled on “mssql”.

See https://github.com/joefrance/Tech-Search/blob/master/MEAN%2C%20NEAT%20stack%20on%20the%20Mac%20-%20Lightning%20Talk.pdf to read about my journey into the MEAN stack which lead me to the NEAT stack on a project under which I could not readily supplant SQL Server.
