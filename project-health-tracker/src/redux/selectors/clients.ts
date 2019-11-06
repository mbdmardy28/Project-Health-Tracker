import { rootState } from "../states/genericState";
import { createSelector } from "reselect";
import { ClientQuery } from "../../common/persistence/clientQuery";

const clients = (state:rootState) => state.entities.clients;

export const getClientsSelector = createSelector(
         clients,(clients) => {
        let clientsQuery: ClientQuery[] = [];
        for (const [key, value] of Object.entries(clients)) {
            const clientQuery: ClientQuery  = {
                id: value.id,
                name: value.clientName
            }
            clientsQuery.push(clientQuery);
        }
        return clientsQuery;
    });
