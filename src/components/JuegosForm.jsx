import { Button, Card, CardActions, CardContent, CardHeader, FormControlLabel, MenuItem, Select, Switch, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers';
import React from 'react'

function JuegosForm() {
    const companias = [{ label: "Sony", value: "sony" },
    { label: "Microsoft", value: "microsoft" },
    { label: "Nintendo", value: "nintendo" }];

    return (
        <Card raised>
            <CardHeader title="Registrar juegos" ></CardHeader>
            <CardContent>
                <div className="mt-3">
                    <TextField label="Nombre" fullWidth id='nombre-juego' ></TextField>
                </div>
                <div className="mt-3">
                    <TextField multiline label="Descripcion" fullWidth id="desc-juego"></TextField>
                </div>
                <div className="mt-3">
                    <Select fullWidth id="compania-juego" label="Compañia" >
                        { companias.map((c)=> 
                            <MenuItem value={c.value}>{c.label}</MenuItem>
                        )}
                    </Select>
                </div>
                <div className="mt-3">
                    <TextField id="plataforma-juego" label="Plataforma" fullWidth></TextField>
                </div>
                <div className="mt-3">
                    <DatePicker fullWidth id="anio-juego" label="Año de lanzamiento"></DatePicker>
                </div>
                <div className="mt-3">
                    <FormControlLabel id="fisico-juego" label="Tiene version fisica?"
                        labelPlacement='start'
                    control={<Switch />} ></FormControlLabel>
                </div>

            </CardContent>
            <CardActions>
                <Button fullWidth variant='outlined' color="secondary" >Registrar Juego</Button>
            </CardActions>
        </Card>
    )
}

export default JuegosForm