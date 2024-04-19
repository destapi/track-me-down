import { useRef, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibXlyZXdhcmQiLCJhIjoiY2x1c3RpMXE5MG82YzJpcDRzcnFzbzdobiJ9.aL5j11VmaE9wWhWn0i1BNw';

const styles = {
    container: {
        height: "600px"
    }
}

export default function MapBoxPanel() {

    const mapContainer = useRef(null)
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [longitude, latitude],
                zoom: 12
            });
          });

        
    })

    return (
        <Box>
            <Typography component="h3" variant='h3'>Location</Typography>
            <Paper elevation={3}>
                <div ref={mapContainer} style={styles.container} ></div>
            </Paper>
        </Box>
    );
}

