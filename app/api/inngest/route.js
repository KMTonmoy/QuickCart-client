import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDelitaion, syncUserUpdation } from "@/config/inngest";

 export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        syncUserCreation,
        syncUserDelitaion,
        syncUserUpdation,
     ],
});
