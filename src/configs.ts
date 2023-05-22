import env from 'env-var';

class Configs {
    environment = env.get('NODE_ENV').default('').asString();
}

const configs = new Configs();
export default configs;
