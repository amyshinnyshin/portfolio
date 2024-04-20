-- settings.sql
CREATE DATABASE portfolio;
CREATE USER portfoliouser WITH PASSWORD 'portfolio';
GRANT ALL PRIVILEGES ON DATABASE portfolio TO portfoliouser;
