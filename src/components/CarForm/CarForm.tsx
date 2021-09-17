import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?:string;
    data?:{}
}

interface CarState {
    year: string;
    car_make: string;
    car_model: string;
    color: string;
    name: string;
    horsepower: string;
    top_speed: string;
    modifications: string;
}

export const CarForm = (props:CarFormProps) => {

    const dispatch = useDispatch();
    let { carData, getData } = useGetData();
    const store = useStore()
    const year = useSelector<CarState>(state => state.year)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.year))
            server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder='Year' />
                </div>
                <div>
                    <label htmlFor="car_make">Make</label>
                    <Input {...register('car_make')} name="car_make" placeholder="Make"/>
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('car_model')} name="car_model" placeholder="Model"/>
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <Input {...register('color')} name="color" placeholder="Color"/>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input {...register('name')} name="name" placeholder="name"/>
                </div>
                <div>
                    <label htmlFor="horsepower">Horsepower</label>
                    <Input {...register('horsepower')} name="horsepower" placeholder="Horsepower"/>
                </div>
                <div>
                    <label htmlFor="top_speed">Top Speed</label>
                    <Input {...register('top_speed')} name="top_speed" placeholder="Top Speed"/>
                </div>
                <div>
                    <label htmlFor="modifications">Modifications</label>
                    <Input {...register('modifications')} name="modifications" placeholder="Modifications"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}