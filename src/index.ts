require('module-alias/register');
import '@/preboot';
import configs from '@/configs';

console.log(`environment: ${configs.environment}`);
