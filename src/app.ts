import { config } from '@root/config';
import { NdpMediaServer } from '@root/setupServer';
import express, { Express } from 'express';
import databaseConnection from '@root/setupDatabase';

class Application {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: Express = express();
    const server: NdpMediaServer = new NdpMediaServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
    config.cloudinaryConfig();
  }
}

const application: Application = new Application();
application.initialize();
