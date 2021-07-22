const { RESTDataSource } = require('apollo-datasource-rest');

class LaunchAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.spacexdata.com/v3/';
    }
    async getAllLaunches() {
        const response = await this.get('launches');
        return Array.isArray(response)
            ? response.map(launch => this.launchReducer(launch))
            : [];
    }

    launchReducer(launch) {
        
        return {
            id: launch.flight_number || 0,
            launch_year: launch.launch_year,
            launch_date_local: launch.launch_date_local, 
            mission_name: launch.mission_name,
            rocket: {
                rocket_name: launch.rocket.rocket_name
            },
            links: {
                video_link: launch.links.video_link
            }
        }
    }
}

module.exports = LaunchAPI;