using AutoMapper;

public static class AutoMapperExtensions
{
    private static IMapper _mapper;
    public static IMapper GetMapper(this IServiceCollection services)
    {
        var provider = services.BuildServiceProvider();
        return provider.GetRequiredService<IMapper>();
    }

    public static void AddAutoMapperProfiles(this IServiceCollection services)
    {
        var mappingConfig = new MapperConfiguration(mc =>
        {
            mc.AddProfile(new MappingProfile());
        });

        IMapper mapper = mappingConfig.CreateMapper();
        services.AddSingleton(mapper);
        _mapper = services.GetMapper();
    }

    public static TDto ToDto<TEntity, TDto>(this TEntity entity)
    {
        return _mapper.Map<TDto>(entity);
    }

    public static TEntity ToEntity<TDto, TEntity>(this TDto dto)
    {
        return _mapper.Map<TEntity>(dto);
    }
}
