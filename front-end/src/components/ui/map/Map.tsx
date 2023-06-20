import {
	FullscreenControl,
	Map,
	Placemark,
	RouteButton,
	SearchControl,
	TypeSelector,
	YMaps,
	ZoomControl
} from '@pbe/react-yandex-maps'

import styles from './Map.module.scss'

const Maps = () => {
	return (
		<div className={styles.map}>
			<YMaps
				query={{
					lang: 'ru_RU',
					apikey: `15bf4fa9-9b68-4caa-a2dc-62ecf8625228
`
				}}
			>
				<Map
					defaultState={{
						center: [55.670991, 37.304258],
						zoom: 11,
						controls: []
					}}
					width={'95%'}
					height={'700px'}
				>
					<FullscreenControl />
					<RouteButton options={{ float: 'right' }} />
					<SearchControl options={{ float: 'right' }} />
					<TypeSelector options={{ float: 'right' }} />
					<ZoomControl options={{ float: 'right' }} />
					<Placemark
						modules={['geoObject.addon.balloon']}
						geometry={[55.670991, 37.304258]}
						options={{ iconColor: 'red' }}
						properties={{
							balloonContentHeader: 'Офис',
							balloonContentBody: `г. Одинцово, ул. Восточная 10, строение 3`,
							balloonContentFooter: 'Литры палитры'
						}}
					/>
				</Map>
			</YMaps>
		</div>
	)
}

export default Maps
